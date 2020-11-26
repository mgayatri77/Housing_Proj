import React from 'react';
import PostPage1 from './PostPage1';
import PostPage2 from './PostPage2';
import PostPage3 from './PostPage3';
import PostPage4 from './PostPage4';
import PostPage5 from './PostPage5';
import PostPage6 from './PostPage6';
import WizardForm from '../WizardForm';

interface PathProps {
  show: boolean;
  setShow: (show: boolean) => void;
}
// TODO only show PostPage1 for first time user
const HousingPost: React.FC<PathProps> = ({ show, setShow }) => (
  <WizardForm show={show} setShow={setShow} title="Find your place">
    <PostPage1 />
    <PostPage2 />
    <PostPage3 />
    <PostPage4 />
    <PostPage5 />
    <PostPage6 setShow={setShow} />
  </WizardForm>
);

export default HousingPost;
