from app.db.database_setup import User, Room, Move_In,\
    House_Attribute, Attribute, Bookmark
from app.util.aws.s3 import get_images, upload_file_wobject
from datetime import datetime

# Create


def add_and_commit(db_row, session):
    session.add(db_row)
    session.commit()


def add_user(name, email, date_created, phone, description, school_year, major,
             session):
    User_to_add = User(name=name, email=email, date_created=date_created,
                       phone=phone, description=description,
                       school_year=school_year,
                       major=major)
    add_and_commit(User_to_add, session)
    return User_to_add


def add_room(date_created, room_type, price, negotiable, description,
             stay_period,
             distance, address, user, move_in, session):
    Room_to_add = Room(date_created=date_created, room_type=room_type,
                       price=price,
                       negotiable=negotiable,
                       description=description, stay_period=stay_period,
                       distance=distance, address=address,
                       user=user, move_in=move_in)
    add_and_commit(Room_to_add, session)
    return Room_to_add


def add_move_in(early_interval, early_month, late_interval,
                late_month, session):
    Move_In_to_add = Move_In(early_interval=early_interval,
                             early_month=early_month,
                             late_interval=late_interval,
                             late_month=late_month)
    add_and_commit(Move_In_to_add, session)
    return Move_In_to_add


def add_house_attribute(room, house_attribute, session):
    House_Attribute_to_add = House_Attribute(
        room=room, house_attribute=house_attribute)
    add_and_commit(House_Attribute_to_add, session)
    return House_Attribute_to_add


def add_attribute(name, category, session):
    Attribute_to_add = Attribute(name=name, category=category)
    add_and_commit(Attribute_to_add, session)
    return Attribute_to_add


def add_bookmark(room_id, user_id, session):
    bookmark_to_add = Bookmark(room_id=room_id, user_id=user_id)
    add_and_commit(bookmark_to_add, session)
    return bookmark_to_add


def remove_bookmark(room_id, user_id, session):
    session.query(Bookmark).filter_by(
        room_id=room_id, user_id=user_id).delete()
    session.commit()
    return
# Read


def check_exist(db_obj, session, **condition):
    """Check if a row that satisfies a certain condition exists
    :param db_obj: Database Object like User
    :param session: a db connection session
    :param condition: kwargs like dict like {'name':'Cris'}
    :return: the row if a row exists, else None
    """
    row = session.query(db_obj).filter_by(**condition).first()
    return row


def read_user(email, session):
    return session.query(User).filter_by(email=email).one()


def read_rooms(session):
    return session.query(Room).all()


def room_json(room, session):
    other_map = {'other': [], 'facilities': []}
    house_attrs = session.query(House_Attribute).filter(
        House_Attribute.room_id == room.id).all()
    house_move_in = session.query(Move_In).filter(
        Move_In.id == room.move_in_id).first()
    house_user = session.query(User).filter(
        User.id == room.user_id).first()
    for ha in house_attrs:
        category_name = session.query(Attribute).filter(
            Attribute.name == ha.attribute_name).first().category
        other_map[category_name].append(ha.attribute_name)
    r_json = room.serialize
    room_name = r_json['address'].split(",")[0]
    return_json = {
        'name': room_name,
        'location': r_json['address'],
        'distance': r_json['distance'],
        'pricePerMonth': r_json['price'],
        'stayPeriod': r_json['stay_period'],
        'early': house_move_in.early_interval + " " + house_move_in.early_month,
        'late': house_move_in.late_interval + " " + house_move_in.late_month,
        'roomType': r_json['room_type'],
        'other': other_map['other'],
        'facilities': other_map['facilities'],
        'leaserName': house_user.name,
        'leaserEmail': house_user.email,
        'leaserPhone': house_user.phone,
        'leaserSchoolYear': house_user.school_year,
        'leaserMajor': house_user.major,
        'leaserIntro': house_user.description,
        'photos': get_images(house_user.email, extra_path=room_name),
        'profilePhoto': 'https://houseit.s3.us-east-2.amazonaws.com/' +
        get_images(house_user.email, category="profile")[0],
        'roomId': r_json['id'],
        'negotiable': r_json['negotiable']
    }
    return return_json


# Update


def update_field(db_obj, session, condition={}, values={}):
    print("updating the field", condition, values)
    updated_obj = session.query(db_obj).filter_by(**condition).update(values)
    session.commit()
    return updated_obj

# write an attribute to database


def write_attr(names, category, room, session):
    for attribute in names:
        # check if an attribute exists
        new_attribute = check_exist(Attribute, session, **{'name': attribute})
        if not new_attribute:
            new_attribute = add_attribute(attribute, category, session)
        # finally add the house attribute
        add_house_attribute(room, new_attribute, session)

# write a single room to database


def write_room(room_json, session):
    # TODO: might need to add error handling upon database fail
    # check if user exists
    room_owner = check_exist(
        User, session, **{'email': room_json['email']})
    room_name = room_json['location'].split(",")[0]
    # if it is first time post
    # TODO not sure if this should be commented out?:
    # if len(room_owner.school_year) == 0:
    #     update_field(
    #         User, session, {'email': room_json['leaserEmail']},
    #         {'school_year': room_json['leaserSchoolYear'],
    #          'major': room_json['leaserMajor'],
    #          'description': room_json['leaserIntro'],
    #          'phone': room_json['leaserPhone']
    #          })

    # TODO evenually change it to do the following:
    # new_move_in = add_move_in(room_json['earlyInterval'],
    #                           room_json['earlyMonth'],
    #                           room_json['lateInterval'],
    #                           room_json['lateMonth'], session)
    new_move_in = add_move_in(room_json['early'],
                              '',
                              room_json['late'],
                              '', session)

    new_room = add_room(datetime.now(),
                        room_json['roomType'],
                        room_json['pricePerMonth'],
                        room_json['negotiable'],
                        '',  # room_json['description'],
                        room_json['stayPeriod'],
                        room_json['distance'],
                        room_json['location'],
                        room_owner, new_move_in, session)
    write_attr(room_json['other'], 'other', new_room, session)
    write_attr(room_json['facilities'], 'facilities', new_room, session)
    # add photo
    for photo in room_json['photos']:
        path_name = "/".join([room_owner.email, 'housing',
                              room_name, photo.filename])
        upload_file_wobject(photo, 'houseit', path_name)
    return True
