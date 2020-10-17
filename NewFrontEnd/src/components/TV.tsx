import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import Login from './Login';
import PostHousing from './PostHousing';

const TV: React.FC<{}> = () => {
  // For login
  const [showLogin, setShowLogin] = useState(false);

  // For Request
  // const [showRequest, setShowRequest] = useState(false);

  // For Posting
  // const [showPosting, setShowPosting] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  // const handleCloseRequest = () => setShowRequest(false);
  // const handleShowRequest = () => setShowRequest(true);
  // const handleClosePosting = () => setShowPosting(false);
  // const handleShowPosting = () => setShowPosting(true);

  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  return (
    <>
      <Container>
        {cookies.user === undefined ? (
          <svg
            width="223"
            height="195"
            viewBox="0 0 223 195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="1.5"
              width="220"
              height="192"
              rx="20.5"
              fill="#F8E6D8"
              stroke="#A15F3D"
              strokeWidth="3"
            />
            <path
              d="M14.5 28C14.5 19.4396 21.4396 12.5 30 12.5H194C202.56 12.5 209.5 19.4396 209.5 28V129C209.5 133.694 205.694 137.5 201 137.5H23C18.3056 137.5 14.5 133.694 14.5 129V28Z"
              fill="white"
              stroke="#A15F3D"
              strokeWidth="3"
            />
            <path
              d="M87.0371 54V52.291L88.5508 51.998V41.793L87.0371 41.5V39.7812H92.9258V41.5L91.4023 41.793V45.8945H97.2031V41.793L95.6797 41.5V39.7812H101.568V41.5L100.045 41.793V51.998L101.568 52.291V54H95.6797V52.291L97.2031 51.998V48.0918H91.4023V51.998L92.9258 52.291V54H87.0371ZM107.789 54.2051C106.773 54.2051 105.888 53.9837 105.133 53.541C104.384 53.0918 103.801 52.4766 103.385 51.6953C102.975 50.9141 102.77 50.0221 102.77 49.0195V48.6289C102.77 47.5807 102.965 46.653 103.355 45.8457C103.746 45.0319 104.296 44.3939 105.006 43.9316C105.722 43.4629 106.565 43.2318 107.535 43.2383C108.961 43.2383 110.051 43.6582 110.807 44.498C111.562 45.3314 111.939 46.5033 111.939 48.0137V49.5664H105.729L105.709 49.625C105.761 50.3216 105.992 50.8945 106.402 51.3438C106.812 51.793 107.395 52.0176 108.15 52.0176C108.671 52.0176 109.156 51.9525 109.605 51.8223C110.061 51.6855 110.504 51.487 110.934 51.2266L111.705 52.9844C111.269 53.3359 110.719 53.6289 110.055 53.8633C109.397 54.0911 108.642 54.2051 107.789 54.2051ZM105.748 47.6816H109.273V47.4277C109.273 46.7897 109.14 46.2852 108.873 45.9141C108.613 45.5365 108.183 45.3477 107.584 45.3477C107.011 45.3477 106.575 45.5658 106.275 46.002C105.976 46.4316 105.79 46.9753 105.719 47.6328L105.748 47.6816ZM113.102 54V52.291L114.479 51.998V40.7773L112.955 40.4844V38.7656H117.33V51.998L118.707 52.291V54H113.102ZM119.488 54V52.291L120.865 51.998V40.7773L119.342 40.4844V38.7656H123.717V51.998L125.094 52.291V54H119.488ZM130.875 54.2051C129.827 54.2051 128.928 53.9772 128.18 53.5215C127.438 53.0658 126.868 52.4342 126.471 51.627C126.074 50.8132 125.875 49.8789 125.875 48.8242V48.6191C125.875 47.571 126.074 46.6432 126.471 45.8359C126.868 45.0221 127.438 44.3874 128.18 43.9316C128.928 43.4694 129.82 43.2383 130.855 43.2383C131.897 43.2383 132.789 43.4661 133.531 43.9219C134.28 44.3776 134.853 45.0124 135.25 45.8262C135.647 46.6335 135.846 47.5645 135.846 48.6191V48.8242C135.846 49.8789 135.647 50.8132 135.25 51.627C134.853 52.4342 134.283 53.0658 133.541 53.5215C132.799 53.9772 131.91 54.2051 130.875 54.2051ZM130.875 52.0176C131.611 52.0176 132.148 51.7246 132.486 51.1387C132.831 50.5527 133.004 49.7812 133.004 48.8242V48.6191C133.004 47.6816 132.831 46.9167 132.486 46.3242C132.141 45.7318 131.598 45.4355 130.855 45.4355C130.113 45.4355 129.573 45.7318 129.234 46.3242C128.896 46.9167 128.727 47.6816 128.727 48.6191V48.8242C128.727 49.7878 128.896 50.5625 129.234 51.1484C129.573 51.7279 130.12 52.0176 130.875 52.0176Z"
              fill="#A15F3D"
            />
            {/* signin button */}
            <g onClick={handleShowLogin}>
              {/* Shitty fix to make it clickable on hover. Probably a better solution exists */}
              <a href="#">
                <rect
                  x="20.5"
                  y="77"
                  width="183"
                  height="50"
                  rx="25"
                  fill="#E7936D"
                />
                <path
                  d="M52.134 108.216C51.138 108.216 50.172 108.084 49.236 107.82C48.312 107.544 47.568 107.19 47.004 106.758L47.994 104.562C48.534 104.958 49.176 105.276 49.92 105.516C50.664 105.756 51.408 105.876 52.152 105.876C52.98 105.876 53.592 105.756 53.988 105.516C54.384 105.264 54.582 104.934 54.582 104.526C54.582 104.226 54.462 103.98 54.222 103.788C53.994 103.584 53.694 103.422 53.322 103.302C52.962 103.182 52.47 103.05 51.846 102.906C50.886 102.678 50.1 102.45 49.488 102.222C48.876 101.994 48.348 101.628 47.904 101.124C47.472 100.62 47.256 99.948 47.256 99.108C47.256 98.376 47.454 97.716 47.85 97.128C48.246 96.528 48.84 96.054 49.632 95.706C50.436 95.358 51.414 95.184 52.566 95.184C53.37 95.184 54.156 95.28 54.924 95.472C55.692 95.664 56.364 95.94 56.94 96.3L56.04 98.514C54.876 97.854 53.712 97.524 52.548 97.524C51.732 97.524 51.126 97.656 50.73 97.92C50.346 98.184 50.154 98.532 50.154 98.964C50.154 99.396 50.376 99.72 50.82 99.936C51.276 100.14 51.966 100.344 52.89 100.548C53.85 100.776 54.636 101.004 55.248 101.232C55.86 101.46 56.382 101.82 56.814 102.312C57.258 102.804 57.48 103.47 57.48 104.31C57.48 105.03 57.276 105.69 56.868 106.29C56.472 106.878 55.872 107.346 55.068 107.694C54.264 108.042 53.286 108.216 52.134 108.216ZM59.2745 98.316H62.0825V108H59.2745V98.316ZM60.6785 96.966C60.1625 96.966 59.7425 96.816 59.4185 96.516C59.0945 96.216 58.9325 95.844 58.9325 95.4C58.9325 94.956 59.0945 94.584 59.4185 94.284C59.7425 93.984 60.1625 93.834 60.6785 93.834C61.1945 93.834 61.6145 93.978 61.9385 94.266C62.2625 94.554 62.4245 94.914 62.4245 95.346C62.4245 95.814 62.2625 96.204 61.9385 96.516C61.6145 96.816 61.1945 96.966 60.6785 96.966ZM74.6786 98.316V106.38C74.6786 108.156 74.2166 109.476 73.2926 110.34C72.3686 111.204 71.0186 111.636 69.2426 111.636C68.3066 111.636 67.4186 111.522 66.5786 111.294C65.7386 111.066 65.0426 110.736 64.4906 110.304L65.6066 108.288C66.0146 108.624 66.5306 108.888 67.1546 109.08C67.7786 109.284 68.4026 109.386 69.0266 109.386C69.9986 109.386 70.7126 109.164 71.1686 108.72C71.6366 108.288 71.8706 107.628 71.8706 106.74V106.326C71.1386 107.13 70.1186 107.532 68.8106 107.532C67.9226 107.532 67.1066 107.34 66.3626 106.956C65.6306 106.56 65.0486 106.008 64.6166 105.3C64.1846 104.592 63.9686 103.776 63.9686 102.852C63.9686 101.928 64.1846 101.112 64.6166 100.404C65.0486 99.696 65.6306 99.15 66.3626 98.766C67.1066 98.37 67.9226 98.172 68.8106 98.172C70.2146 98.172 71.2826 98.634 72.0146 99.558V98.316H74.6786ZM69.3686 105.228C70.1126 105.228 70.7186 105.012 71.1866 104.58C71.6666 104.136 71.9066 103.56 71.9066 102.852C71.9066 102.144 71.6666 101.574 71.1866 101.142C70.7186 100.698 70.1126 100.476 69.3686 100.476C68.6246 100.476 68.0126 100.698 67.5326 101.142C67.0526 101.574 66.8126 102.144 66.8126 102.852C66.8126 103.56 67.0526 104.136 67.5326 104.58C68.0126 105.012 68.6246 105.228 69.3686 105.228ZM83.1781 98.172C84.3781 98.172 85.3441 98.532 86.0761 99.252C86.8201 99.972 87.1921 101.04 87.1921 102.456V108H84.3841V102.888C84.3841 102.12 84.2161 101.55 83.8801 101.178C83.5441 100.794 83.0581 100.602 82.4221 100.602C81.7141 100.602 81.1501 100.824 80.7301 101.268C80.3101 101.7 80.1001 102.348 80.1001 103.212V108H77.2921V98.316H79.9741V99.45C80.3461 99.042 80.8081 98.73 81.3601 98.514C81.9121 98.286 82.5181 98.172 83.1781 98.172ZM94.8351 98.316H97.6431V108H94.8351V98.316ZM96.2391 96.966C95.7231 96.966 95.3031 96.816 94.9791 96.516C94.6551 96.216 94.4931 95.844 94.4931 95.4C94.4931 94.956 94.6551 94.584 94.9791 94.284C95.3031 93.984 95.7231 93.834 96.2391 93.834C96.7551 93.834 97.1751 93.978 97.4991 94.266C97.8231 94.554 97.9851 94.914 97.9851 95.346C97.9851 95.814 97.8231 96.204 97.4991 96.516C97.1751 96.816 96.7551 96.966 96.2391 96.966ZM106.135 98.172C107.335 98.172 108.301 98.532 109.033 99.252C109.777 99.972 110.149 101.04 110.149 102.456V108H107.341V102.888C107.341 102.12 107.173 101.55 106.837 101.178C106.501 100.794 106.015 100.602 105.379 100.602C104.671 100.602 104.107 100.824 103.687 101.268C103.267 101.7 103.057 102.348 103.057 103.212V108H100.249V98.316H102.931V99.45C103.303 99.042 103.765 98.73 104.317 98.514C104.869 98.286 105.475 98.172 106.135 98.172ZM124.038 107.532C123.762 107.736 123.42 107.892 123.012 108C122.616 108.096 122.196 108.144 121.752 108.144C120.6 108.144 119.706 107.85 119.07 107.262C118.446 106.674 118.134 105.81 118.134 104.67V100.692H116.64V98.532H118.134V96.174H120.942V98.532H123.354V100.692H120.942V104.634C120.942 105.042 121.044 105.36 121.248 105.588C121.464 105.804 121.764 105.912 122.148 105.912C122.592 105.912 122.97 105.792 123.282 105.552L124.038 107.532ZM129.924 108.144C128.904 108.144 127.986 107.934 127.17 107.514C126.366 107.082 125.736 106.488 125.28 105.732C124.824 104.976 124.596 104.118 124.596 103.158C124.596 102.198 124.824 101.34 125.28 100.584C125.736 99.828 126.366 99.24 127.17 98.82C127.986 98.388 128.904 98.172 129.924 98.172C130.944 98.172 131.856 98.388 132.66 98.82C133.464 99.24 134.094 99.828 134.55 100.584C135.006 101.34 135.234 102.198 135.234 103.158C135.234 104.118 135.006 104.976 134.55 105.732C134.094 106.488 133.464 107.082 132.66 107.514C131.856 107.934 130.944 108.144 129.924 108.144ZM129.924 105.84C130.644 105.84 131.232 105.6 131.688 105.12C132.156 104.628 132.39 103.974 132.39 103.158C132.39 102.342 132.156 101.694 131.688 101.214C131.232 100.722 130.644 100.476 129.924 100.476C129.204 100.476 128.61 100.722 128.142 101.214C127.674 101.694 127.44 102.342 127.44 103.158C127.44 103.974 127.674 104.628 128.142 105.12C128.61 105.6 129.204 105.84 129.924 105.84ZM147.932 98.172C148.832 98.172 149.648 98.382 150.38 98.802C151.124 99.21 151.706 99.792 152.126 100.548C152.546 101.292 152.756 102.162 152.756 103.158C152.756 104.154 152.546 105.03 152.126 105.786C151.706 106.53 151.124 107.112 150.38 107.532C149.648 107.94 148.832 108.144 147.932 108.144C146.696 108.144 145.724 107.754 145.016 106.974V111.492H142.208V98.316H144.89V99.432C145.586 98.592 146.6 98.172 147.932 98.172ZM147.446 105.84C148.166 105.84 148.754 105.6 149.21 105.12C149.678 104.628 149.912 103.974 149.912 103.158C149.912 102.342 149.678 101.694 149.21 101.214C148.754 100.722 148.166 100.476 147.446 100.476C146.726 100.476 146.132 100.722 145.664 101.214C145.208 101.694 144.98 102.342 144.98 103.158C144.98 103.974 145.208 104.628 145.664 105.12C146.132 105.6 146.726 105.84 147.446 105.84ZM159.244 108.144C158.224 108.144 157.306 107.934 156.49 107.514C155.686 107.082 155.056 106.488 154.6 105.732C154.144 104.976 153.916 104.118 153.916 103.158C153.916 102.198 154.144 101.34 154.6 100.584C155.056 99.828 155.686 99.24 156.49 98.82C157.306 98.388 158.224 98.172 159.244 98.172C160.264 98.172 161.176 98.388 161.98 98.82C162.784 99.24 163.414 99.828 163.87 100.584C164.326 101.34 164.554 102.198 164.554 103.158C164.554 104.118 164.326 104.976 163.87 105.732C163.414 106.488 162.784 107.082 161.98 107.514C161.176 107.934 160.264 108.144 159.244 108.144ZM159.244 105.84C159.964 105.84 160.552 105.6 161.008 105.12C161.476 104.628 161.71 103.974 161.71 103.158C161.71 102.342 161.476 101.694 161.008 101.214C160.552 100.722 159.964 100.476 159.244 100.476C158.524 100.476 157.93 100.722 157.462 101.214C156.994 101.694 156.76 102.342 156.76 103.158C156.76 103.974 156.994 104.628 157.462 105.12C157.93 105.6 158.524 105.84 159.244 105.84ZM169.689 108.144C168.885 108.144 168.099 108.048 167.331 107.856C166.563 107.652 165.951 107.4 165.495 107.1L166.431 105.084C166.863 105.36 167.385 105.588 167.997 105.768C168.609 105.936 169.209 106.02 169.797 106.02C170.985 106.02 171.579 105.726 171.579 105.138C171.579 104.862 171.417 104.664 171.093 104.544C170.769 104.424 170.271 104.322 169.599 104.238C168.807 104.118 168.153 103.98 167.637 103.824C167.121 103.668 166.671 103.392 166.287 102.996C165.915 102.6 165.729 102.036 165.729 101.304C165.729 100.692 165.903 100.152 166.251 99.684C166.611 99.204 167.127 98.832 167.799 98.568C168.483 98.304 169.287 98.172 170.211 98.172C170.895 98.172 171.573 98.25 172.245 98.406C172.929 98.55 173.493 98.754 173.937 99.018L173.001 101.016C172.149 100.536 171.219 100.296 170.211 100.296C169.611 100.296 169.161 100.38 168.861 100.548C168.561 100.716 168.411 100.932 168.411 101.196C168.411 101.496 168.573 101.706 168.897 101.826C169.221 101.946 169.737 102.06 170.445 102.168C171.237 102.3 171.885 102.444 172.389 102.6C172.893 102.744 173.331 103.014 173.703 103.41C174.075 103.806 174.261 104.358 174.261 105.066C174.261 105.666 174.081 106.2 173.721 106.668C173.361 107.136 172.833 107.502 172.137 107.766C171.453 108.018 170.637 108.144 169.689 108.144ZM182.239 107.532C181.963 107.736 181.621 107.892 181.213 108C180.817 108.096 180.397 108.144 179.953 108.144C178.801 108.144 177.907 107.85 177.271 107.262C176.647 106.674 176.335 105.81 176.335 104.67V100.692H174.841V98.532H176.335V96.174H179.143V98.532H181.555V100.692H179.143V104.634C179.143 105.042 179.245 105.36 179.449 105.588C179.665 105.804 179.965 105.912 180.349 105.912C180.793 105.912 181.171 105.792 181.483 105.552L182.239 107.532Z"
                  fill="white"
                />
              </a>
            </g>
            <line
              x1="37"
              y1="60.5"
              x2="194"
              y2="60.5"
              stroke="#A15F3D"
              strokeOpacity="0.4"
              strokeWidth="3"
            />
            <rect
              x="37"
              y="152"
              width="120"
              height="20"
              rx="10"
              fill="#D5B09A"
            />
            <rect
              x="173"
              y="152"
              width="21"
              height="20"
              rx="10"
              fill="#D5B09A"
            />
          </svg>
        ) : (
          <svg
            width="225"
            height="195"
            viewBox="0 0 225 195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="1.5"
              width="220"
              height="192"
              rx="20.5"
              fill="#F8E6D8"
              stroke="#A15F3D"
              strokeWidth="3"
            />
            <path
              d="M14.5 28C14.5 19.4396 21.4396 12.5 30 12.5H194C202.56 12.5 209.5 19.4396 209.5 28V129C209.5 133.694 205.694 137.5 201 137.5H23C18.3056 137.5 14.5 133.694 14.5 129V28Z"
              fill="white"
              stroke="#A15F3D"
              strokeWidth="3"
            />
            <rect
              x="37"
              y="152"
              width="120"
              height="20"
              rx="10"
              fill="#D5B09A"
            />
            <rect
              x="173"
              y="152"
              width="21"
              height="20"
              rx="10"
              fill="#D5B09A"
            />
            {/* Top Button */}
            {/* 
            <foreignObject>
              <PostHousing />
            </foreignObject>
            */}
            <g filter="url(#filter0_d)">
              <a href="#">
                <path
                  d="M18 49C18 36.2975 28.2975 26 41 26H184C196.703 26 207 36.2975 207 49C207 61.7025 196.703 72 184 72H41C28.2975 72 18 61.7025 18 49Z"
                  fill="#E7936D"
                />
                <path
                  d="M48.948 42.4C50.064 42.4 51.03 42.586 51.846 42.958C52.674 43.33 53.31 43.858 53.754 44.542C54.198 45.226 54.42 46.036 54.42 46.972C54.42 47.896 54.198 48.706 53.754 49.402C53.31 50.086 52.674 50.614 51.846 50.986C51.03 51.346 50.064 51.526 48.948 51.526H46.41V55H43.494V42.4H48.948ZM48.786 49.15C49.662 49.15 50.328 48.964 50.784 48.592C51.24 48.208 51.468 47.668 51.468 46.972C51.468 46.264 51.24 45.724 50.784 45.352C50.328 44.968 49.662 44.776 48.786 44.776H46.41V49.15H48.786ZM60.8942 55.144C59.8742 55.144 58.9562 54.934 58.1402 54.514C57.3362 54.082 56.7062 53.488 56.2502 52.732C55.7942 51.976 55.5662 51.118 55.5662 50.158C55.5662 49.198 55.7942 48.34 56.2502 47.584C56.7062 46.828 57.3362 46.24 58.1402 45.82C58.9562 45.388 59.8742 45.172 60.8942 45.172C61.9142 45.172 62.8262 45.388 63.6302 45.82C64.4342 46.24 65.0642 46.828 65.5202 47.584C65.9762 48.34 66.2042 49.198 66.2042 50.158C66.2042 51.118 65.9762 51.976 65.5202 52.732C65.0642 53.488 64.4342 54.082 63.6302 54.514C62.8262 54.934 61.9142 55.144 60.8942 55.144ZM60.8942 52.84C61.6142 52.84 62.2022 52.6 62.6582 52.12C63.1262 51.628 63.3602 50.974 63.3602 50.158C63.3602 49.342 63.1262 48.694 62.6582 48.214C62.2022 47.722 61.6142 47.476 60.8942 47.476C60.1742 47.476 59.5802 47.722 59.1122 48.214C58.6442 48.694 58.4102 49.342 58.4102 50.158C58.4102 50.974 58.6442 51.628 59.1122 52.12C59.5802 52.6 60.1742 52.84 60.8942 52.84ZM71.3392 55.144C70.5352 55.144 69.7492 55.048 68.9812 54.856C68.2132 54.652 67.6012 54.4 67.1452 54.1L68.0812 52.084C68.5132 52.36 69.0352 52.588 69.6472 52.768C70.2592 52.936 70.8592 53.02 71.4472 53.02C72.6352 53.02 73.2292 52.726 73.2292 52.138C73.2292 51.862 73.0672 51.664 72.7432 51.544C72.4192 51.424 71.9212 51.322 71.2492 51.238C70.4572 51.118 69.8032 50.98 69.2872 50.824C68.7712 50.668 68.3212 50.392 67.9372 49.996C67.5652 49.6 67.3792 49.036 67.3792 48.304C67.3792 47.692 67.5532 47.152 67.9012 46.684C68.2612 46.204 68.7772 45.832 69.4492 45.568C70.1332 45.304 70.9372 45.172 71.8612 45.172C72.5452 45.172 73.2232 45.25 73.8952 45.406C74.5792 45.55 75.1432 45.754 75.5872 46.018L74.6512 48.016C73.7992 47.536 72.8692 47.296 71.8612 47.296C71.2612 47.296 70.8112 47.38 70.5112 47.548C70.2112 47.716 70.0612 47.932 70.0612 48.196C70.0612 48.496 70.2232 48.706 70.5472 48.826C70.8712 48.946 71.3872 49.06 72.0952 49.168C72.8872 49.3 73.5352 49.444 74.0392 49.6C74.5432 49.744 74.9812 50.014 75.3532 50.41C75.7252 50.806 75.9112 51.358 75.9112 52.066C75.9112 52.666 75.7312 53.2 75.3712 53.668C75.0112 54.136 74.4832 54.502 73.7872 54.766C73.1032 55.018 72.2872 55.144 71.3392 55.144ZM83.8897 54.532C83.6137 54.736 83.2717 54.892 82.8637 55C82.4677 55.096 82.0477 55.144 81.6037 55.144C80.4517 55.144 79.5577 54.85 78.9217 54.262C78.2977 53.674 77.9857 52.81 77.9857 51.67V47.692H76.4917V45.532H77.9857V43.174H80.7937V45.532H83.2057V47.692H80.7937V51.634C80.7937 52.042 80.8957 52.36 81.0997 52.588C81.3157 52.804 81.6157 52.912 81.9997 52.912C82.4437 52.912 82.8217 52.792 83.1337 52.552L83.8897 54.532ZM96.4496 45.172C97.6496 45.172 98.6156 45.532 99.3476 46.252C100.092 46.972 100.464 48.04 100.464 49.456V55H97.6556V49.888C97.6556 49.12 97.4876 48.55 97.1516 48.178C96.8156 47.794 96.3296 47.602 95.6936 47.602C94.9856 47.602 94.4216 47.824 94.0016 48.268C93.5816 48.7 93.3716 49.348 93.3716 50.212V55H90.5636V41.644H93.3716V46.324C93.7436 45.952 94.1936 45.67 94.7216 45.478C95.2496 45.274 95.8256 45.172 96.4496 45.172ZM107.722 55.144C106.702 55.144 105.784 54.934 104.968 54.514C104.164 54.082 103.534 53.488 103.078 52.732C102.622 51.976 102.394 51.118 102.394 50.158C102.394 49.198 102.622 48.34 103.078 47.584C103.534 46.828 104.164 46.24 104.968 45.82C105.784 45.388 106.702 45.172 107.722 45.172C108.742 45.172 109.654 45.388 110.458 45.82C111.262 46.24 111.892 46.828 112.348 47.584C112.804 48.34 113.032 49.198 113.032 50.158C113.032 51.118 112.804 51.976 112.348 52.732C111.892 53.488 111.262 54.082 110.458 54.514C109.654 54.934 108.742 55.144 107.722 55.144ZM107.722 52.84C108.442 52.84 109.03 52.6 109.486 52.12C109.954 51.628 110.188 50.974 110.188 50.158C110.188 49.342 109.954 48.694 109.486 48.214C109.03 47.722 108.442 47.476 107.722 47.476C107.002 47.476 106.408 47.722 105.94 48.214C105.472 48.694 105.238 49.342 105.238 50.158C105.238 50.974 105.472 51.628 105.94 52.12C106.408 52.6 107.002 52.84 107.722 52.84ZM124.665 45.316V55H122.001V53.848C121.629 54.268 121.185 54.592 120.669 54.82C120.153 55.036 119.595 55.144 118.995 55.144C117.723 55.144 116.715 54.778 115.971 54.046C115.227 53.314 114.855 52.228 114.855 50.788V45.316H117.663V50.374C117.663 51.934 118.317 52.714 119.625 52.714C120.297 52.714 120.837 52.498 121.245 52.066C121.653 51.622 121.857 50.968 121.857 50.104V45.316H124.665ZM130.525 55.144C129.721 55.144 128.935 55.048 128.167 54.856C127.399 54.652 126.787 54.4 126.331 54.1L127.267 52.084C127.699 52.36 128.221 52.588 128.833 52.768C129.445 52.936 130.045 53.02 130.633 53.02C131.821 53.02 132.415 52.726 132.415 52.138C132.415 51.862 132.253 51.664 131.929 51.544C131.605 51.424 131.107 51.322 130.435 51.238C129.643 51.118 128.989 50.98 128.473 50.824C127.957 50.668 127.507 50.392 127.123 49.996C126.751 49.6 126.565 49.036 126.565 48.304C126.565 47.692 126.739 47.152 127.087 46.684C127.447 46.204 127.963 45.832 128.635 45.568C129.319 45.304 130.123 45.172 131.047 45.172C131.731 45.172 132.409 45.25 133.081 45.406C133.765 45.55 134.329 45.754 134.773 46.018L133.837 48.016C132.985 47.536 132.055 47.296 131.047 47.296C130.447 47.296 129.997 47.38 129.697 47.548C129.397 47.716 129.247 47.932 129.247 48.196C129.247 48.496 129.409 48.706 129.733 48.826C130.057 48.946 130.573 49.06 131.281 49.168C132.073 49.3 132.721 49.444 133.225 49.6C133.729 49.744 134.167 50.014 134.539 50.41C134.911 50.806 135.097 51.358 135.097 52.066C135.097 52.666 134.917 53.2 134.557 53.668C134.197 54.136 133.669 54.502 132.973 54.766C132.289 55.018 131.473 55.144 130.525 55.144ZM146.315 50.194C146.315 50.23 146.297 50.482 146.261 50.95H138.935C139.067 51.55 139.379 52.024 139.871 52.372C140.363 52.72 140.975 52.894 141.707 52.894C142.211 52.894 142.655 52.822 143.039 52.678C143.435 52.522 143.801 52.282 144.137 51.958L145.631 53.578C144.719 54.622 143.387 55.144 141.635 55.144C140.543 55.144 139.577 54.934 138.737 54.514C137.897 54.082 137.249 53.488 136.793 52.732C136.337 51.976 136.109 51.118 136.109 50.158C136.109 49.21 136.331 48.358 136.775 47.602C137.231 46.834 137.849 46.24 138.629 45.82C139.421 45.388 140.303 45.172 141.275 45.172C142.223 45.172 143.081 45.376 143.849 45.784C144.617 46.192 145.217 46.78 145.649 47.548C146.093 48.304 146.315 49.186 146.315 50.194ZM141.293 47.296C140.657 47.296 140.123 47.476 139.691 47.836C139.259 48.196 138.995 48.688 138.899 49.312H143.669C143.573 48.7 143.309 48.214 142.877 47.854C142.445 47.482 141.917 47.296 141.293 47.296ZM153.282 45.316H156.09V55H153.282V45.316ZM154.686 43.966C154.17 43.966 153.75 43.816 153.426 43.516C153.102 43.216 152.94 42.844 152.94 42.4C152.94 41.956 153.102 41.584 153.426 41.284C153.75 40.984 154.17 40.834 154.686 40.834C155.202 40.834 155.622 40.978 155.946 41.266C156.27 41.554 156.432 41.914 156.432 42.346C156.432 42.814 156.27 43.204 155.946 43.516C155.622 43.816 155.202 43.966 154.686 43.966ZM164.582 45.172C165.782 45.172 166.748 45.532 167.48 46.252C168.224 46.972 168.596 48.04 168.596 49.456V55H165.788V49.888C165.788 49.12 165.62 48.55 165.284 48.178C164.948 47.794 164.462 47.602 163.826 47.602C163.118 47.602 162.554 47.824 162.134 48.268C161.714 48.7 161.504 49.348 161.504 50.212V55H158.696V45.316H161.378V46.45C161.75 46.042 162.212 45.73 162.764 45.514C163.316 45.286 163.922 45.172 164.582 45.172ZM174.22 45.532H176.704V47.692H174.292V55H171.484V47.692H169.99V45.532H171.484V45.1C171.484 43.996 171.808 43.12 172.456 42.472C173.116 41.824 174.04 41.5 175.228 41.5C175.648 41.5 176.044 41.548 176.416 41.644C176.8 41.728 177.118 41.854 177.37 42.022L176.632 44.056C176.308 43.828 175.93 43.714 175.498 43.714C174.646 43.714 174.22 44.182 174.22 45.118V45.532ZM182.588 55.144C181.568 55.144 180.65 54.934 179.834 54.514C179.03 54.082 178.4 53.488 177.944 52.732C177.488 51.976 177.26 51.118 177.26 50.158C177.26 49.198 177.488 48.34 177.944 47.584C178.4 46.828 179.03 46.24 179.834 45.82C180.65 45.388 181.568 45.172 182.588 45.172C183.608 45.172 184.52 45.388 185.324 45.82C186.128 46.24 186.758 46.828 187.214 47.584C187.67 48.34 187.898 49.198 187.898 50.158C187.898 51.118 187.67 51.976 187.214 52.732C186.758 53.488 186.128 54.082 185.324 54.514C184.52 54.934 183.608 55.144 182.588 55.144ZM182.588 52.84C183.308 52.84 183.896 52.6 184.352 52.12C184.82 51.628 185.054 50.974 185.054 50.158C185.054 49.342 184.82 48.694 184.352 48.214C183.896 47.722 183.308 47.476 182.588 47.476C181.868 47.476 181.274 47.722 180.806 48.214C180.338 48.694 180.104 49.342 180.104 50.158C180.104 50.974 180.338 51.628 180.806 52.12C181.274 52.6 181.868 52.84 182.588 52.84Z"
                  fill="white"
                />
              </a>
            </g>
            {/* Bottom Button */}
            <g>
              {/* TODO: fix clickable */}
              <a href="#">
                <path
                  d="M18 104C18 91.2975 28.2975 81 41 81H182C194.703 81 205 91.2975 205 104C205 116.703 194.703 127 182 127H41C28.2975 127 18 116.703 18 104Z"
                  fill="#E7936D"
                />
                <path
                  d="M48.948 97.4C50.064 97.4 51.03 97.586 51.846 97.958C52.674 98.33 53.31 98.858 53.754 99.542C54.198 100.226 54.42 101.036 54.42 101.972C54.42 102.896 54.198 103.706 53.754 104.402C53.31 105.086 52.674 105.614 51.846 105.986C51.03 106.346 50.064 106.526 48.948 106.526H46.41V110H43.494V97.4H48.948ZM48.786 104.15C49.662 104.15 50.328 103.964 50.784 103.592C51.24 103.208 51.468 102.668 51.468 101.972C51.468 101.264 51.24 100.724 50.784 100.352C50.328 99.968 49.662 99.776 48.786 99.776H46.41V104.15H48.786ZM60.8942 110.144C59.8742 110.144 58.9562 109.934 58.1402 109.514C57.3362 109.082 56.7062 108.488 56.2502 107.732C55.7942 106.976 55.5662 106.118 55.5662 105.158C55.5662 104.198 55.7942 103.34 56.2502 102.584C56.7062 101.828 57.3362 101.24 58.1402 100.82C58.9562 100.388 59.8742 100.172 60.8942 100.172C61.9142 100.172 62.8262 100.388 63.6302 100.82C64.4342 101.24 65.0642 101.828 65.5202 102.584C65.9762 103.34 66.2042 104.198 66.2042 105.158C66.2042 106.118 65.9762 106.976 65.5202 107.732C65.0642 108.488 64.4342 109.082 63.6302 109.514C62.8262 109.934 61.9142 110.144 60.8942 110.144ZM60.8942 107.84C61.6142 107.84 62.2022 107.6 62.6582 107.12C63.1262 106.628 63.3602 105.974 63.3602 105.158C63.3602 104.342 63.1262 103.694 62.6582 103.214C62.2022 102.722 61.6142 102.476 60.8942 102.476C60.1742 102.476 59.5802 102.722 59.1122 103.214C58.6442 103.694 58.4102 104.342 58.4102 105.158C58.4102 105.974 58.6442 106.628 59.1122 107.12C59.5802 107.6 60.1742 107.84 60.8942 107.84ZM71.3392 110.144C70.5352 110.144 69.7492 110.048 68.9812 109.856C68.2132 109.652 67.6012 109.4 67.1452 109.1L68.0812 107.084C68.5132 107.36 69.0352 107.588 69.6472 107.768C70.2592 107.936 70.8592 108.02 71.4472 108.02C72.6352 108.02 73.2292 107.726 73.2292 107.138C73.2292 106.862 73.0672 106.664 72.7432 106.544C72.4192 106.424 71.9212 106.322 71.2492 106.238C70.4572 106.118 69.8032 105.98 69.2872 105.824C68.7712 105.668 68.3212 105.392 67.9372 104.996C67.5652 104.6 67.3792 104.036 67.3792 103.304C67.3792 102.692 67.5532 102.152 67.9012 101.684C68.2612 101.204 68.7772 100.832 69.4492 100.568C70.1332 100.304 70.9372 100.172 71.8612 100.172C72.5452 100.172 73.2232 100.25 73.8952 100.406C74.5792 100.55 75.1432 100.754 75.5872 101.018L74.6512 103.016C73.7992 102.536 72.8692 102.296 71.8612 102.296C71.2612 102.296 70.8112 102.38 70.5112 102.548C70.2112 102.716 70.0612 102.932 70.0612 103.196C70.0612 103.496 70.2232 103.706 70.5472 103.826C70.8712 103.946 71.3872 104.06 72.0952 104.168C72.8872 104.3 73.5352 104.444 74.0392 104.6C74.5432 104.744 74.9812 105.014 75.3532 105.41C75.7252 105.806 75.9112 106.358 75.9112 107.066C75.9112 107.666 75.7312 108.2 75.3712 108.668C75.0112 109.136 74.4832 109.502 73.7872 109.766C73.1032 110.018 72.2872 110.144 71.3392 110.144ZM83.8897 109.532C83.6137 109.736 83.2717 109.892 82.8637 110C82.4677 110.096 82.0477 110.144 81.6037 110.144C80.4517 110.144 79.5577 109.85 78.9217 109.262C78.2977 108.674 77.9857 107.81 77.9857 106.67V102.692H76.4917V100.532H77.9857V98.174H80.7937V100.532H83.2057V102.692H80.7937V106.634C80.7937 107.042 80.8957 107.36 81.0997 107.588C81.3157 107.804 81.6157 107.912 81.9997 107.912C82.4437 107.912 82.8217 107.792 83.1337 107.552L83.8897 109.532ZM100.32 100.316V110H97.6556V108.848C97.2836 109.268 96.8396 109.592 96.3236 109.82C95.8076 110.036 95.2496 110.144 94.6496 110.144C93.3776 110.144 92.3696 109.778 91.6256 109.046C90.8816 108.314 90.5096 107.228 90.5096 105.788V100.316H93.3176V105.374C93.3176 106.934 93.9716 107.714 95.2796 107.714C95.9516 107.714 96.4916 107.498 96.8996 107.066C97.3076 106.622 97.5116 105.968 97.5116 105.104V100.316H100.32ZM105.603 101.594C105.939 101.126 106.389 100.772 106.953 100.532C107.529 100.292 108.189 100.172 108.933 100.172V102.764C108.621 102.74 108.411 102.728 108.303 102.728C107.499 102.728 106.869 102.956 106.413 103.412C105.957 103.856 105.729 104.528 105.729 105.428V110H102.921V100.316H105.603V101.594ZM118.453 101.594C118.789 101.126 119.239 100.772 119.803 100.532C120.379 100.292 121.039 100.172 121.783 100.172V102.764C121.471 102.74 121.261 102.728 121.153 102.728C120.349 102.728 119.719 102.956 119.263 103.412C118.807 103.856 118.579 104.528 118.579 105.428V110H115.771V100.316H118.453V101.594ZM132.85 105.194C132.85 105.23 132.832 105.482 132.796 105.95H125.47C125.602 106.55 125.914 107.024 126.406 107.372C126.898 107.72 127.51 107.894 128.242 107.894C128.746 107.894 129.19 107.822 129.574 107.678C129.97 107.522 130.336 107.282 130.672 106.958L132.166 108.578C131.254 109.622 129.922 110.144 128.17 110.144C127.078 110.144 126.112 109.934 125.272 109.514C124.432 109.082 123.784 108.488 123.328 107.732C122.872 106.976 122.644 106.118 122.644 105.158C122.644 104.21 122.866 103.358 123.31 102.602C123.766 101.834 124.384 101.24 125.164 100.82C125.956 100.388 126.838 100.172 127.81 100.172C128.758 100.172 129.616 100.376 130.384 100.784C131.152 101.192 131.752 101.78 132.184 102.548C132.628 103.304 132.85 104.186 132.85 105.194ZM127.828 102.296C127.192 102.296 126.658 102.476 126.226 102.836C125.794 103.196 125.53 103.688 125.434 104.312H130.204C130.108 103.7 129.844 103.214 129.412 102.854C128.98 102.482 128.452 102.296 127.828 102.296ZM144.548 100.316V113.492H141.74V108.974C141.044 109.754 140.078 110.144 138.842 110.144C137.93 110.144 137.102 109.94 136.358 109.532C135.626 109.124 135.05 108.542 134.63 107.786C134.21 107.03 134 106.154 134 105.158C134 104.162 134.21 103.286 134.63 102.53C135.05 101.774 135.626 101.192 136.358 100.784C137.102 100.376 137.93 100.172 138.842 100.172C140.162 100.172 141.17 100.592 141.866 101.432V100.316H144.548ZM139.328 107.84C140.036 107.84 140.624 107.6 141.092 107.12C141.56 106.628 141.794 105.974 141.794 105.158C141.794 104.342 141.56 103.694 141.092 103.214C140.624 102.722 140.036 102.476 139.328 102.476C138.608 102.476 138.014 102.722 137.546 103.214C137.078 103.694 136.844 104.342 136.844 105.158C136.844 105.974 137.078 106.628 137.546 107.12C138.014 107.6 138.608 107.84 139.328 107.84ZM156.904 100.316V110H154.24V108.848C153.868 109.268 153.424 109.592 152.908 109.82C152.392 110.036 151.834 110.144 151.234 110.144C149.962 110.144 148.954 109.778 148.21 109.046C147.466 108.314 147.094 107.228 147.094 105.788V100.316H149.902V105.374C149.902 106.934 150.556 107.714 151.864 107.714C152.536 107.714 153.076 107.498 153.484 107.066C153.892 106.622 154.096 105.968 154.096 105.104V100.316H156.904ZM168.991 105.194C168.991 105.23 168.973 105.482 168.937 105.95H161.611C161.743 106.55 162.055 107.024 162.547 107.372C163.039 107.72 163.651 107.894 164.383 107.894C164.887 107.894 165.331 107.822 165.715 107.678C166.111 107.522 166.477 107.282 166.813 106.958L168.307 108.578C167.395 109.622 166.063 110.144 164.311 110.144C163.219 110.144 162.253 109.934 161.413 109.514C160.573 109.082 159.925 108.488 159.469 107.732C159.013 106.976 158.785 106.118 158.785 105.158C158.785 104.21 159.007 103.358 159.451 102.602C159.907 101.834 160.525 101.24 161.305 100.82C162.097 100.388 162.979 100.172 163.951 100.172C164.899 100.172 165.757 100.376 166.525 100.784C167.293 101.192 167.893 101.78 168.325 102.548C168.769 103.304 168.991 104.186 168.991 105.194ZM163.969 102.296C163.333 102.296 162.799 102.476 162.367 102.836C161.935 103.196 161.671 103.688 161.575 104.312H166.345C166.249 103.7 165.985 103.214 165.553 102.854C165.121 102.482 164.593 102.296 163.969 102.296ZM174.118 110.144C173.314 110.144 172.528 110.048 171.76 109.856C170.992 109.652 170.38 109.4 169.924 109.1L170.86 107.084C171.292 107.36 171.814 107.588 172.426 107.768C173.038 107.936 173.638 108.02 174.226 108.02C175.414 108.02 176.008 107.726 176.008 107.138C176.008 106.862 175.846 106.664 175.522 106.544C175.198 106.424 174.7 106.322 174.028 106.238C173.236 106.118 172.582 105.98 172.066 105.824C171.55 105.668 171.1 105.392 170.716 104.996C170.344 104.6 170.158 104.036 170.158 103.304C170.158 102.692 170.332 102.152 170.68 101.684C171.04 101.204 171.556 100.832 172.228 100.568C172.912 100.304 173.716 100.172 174.64 100.172C175.324 100.172 176.002 100.25 176.674 100.406C177.358 100.55 177.922 100.754 178.366 101.018L177.43 103.016C176.578 102.536 175.648 102.296 174.64 102.296C174.04 102.296 173.59 102.38 173.29 102.548C172.99 102.716 172.84 102.932 172.84 103.196C172.84 103.496 173.002 103.706 173.326 103.826C173.65 103.946 174.166 104.06 174.874 104.168C175.666 104.3 176.314 104.444 176.818 104.6C177.322 104.744 177.76 105.014 178.132 105.41C178.504 105.806 178.69 106.358 178.69 107.066C178.69 107.666 178.51 108.2 178.15 108.668C177.79 109.136 177.262 109.502 176.566 109.766C175.882 110.018 175.066 110.144 174.118 110.144ZM186.669 109.532C186.393 109.736 186.051 109.892 185.643 110C185.247 110.096 184.827 110.144 184.383 110.144C183.231 110.144 182.337 109.85 181.701 109.262C181.077 108.674 180.765 107.81 180.765 106.67V102.692H179.271V100.532H180.765V98.174H183.573V100.532H185.985V102.692H183.573V106.634C183.573 107.042 183.675 107.36 183.879 107.588C184.095 107.804 184.395 107.912 184.779 107.912C185.223 107.912 185.601 107.792 185.913 107.552L186.669 109.532Z"
                  fill="white"
                />
              </a>
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="16"
                y="20"
                width="209"
                height="66"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="8" dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.643137 0 0 0 0 0.380392 0 0 0 0 0.243137 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}
      </Container>
      <Login show={showLogin} handleClose={handleCloseLogin} />
      {/* <PostHousing show={showPosting} handleClose={handleClosePosting} /> */}
    </>
  );
};

export default TV;
