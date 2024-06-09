import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  XIcon,
  EmailIcon,
} from "react-share";

const Share = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="d-flex">
        {/* FacebookLink */}

        <div className="share-button">
          <FacebookShareButton url="https://yourwebsite.com">
            <FacebookIcon size={30} round={true} />
          </FacebookShareButton>

          <span> </span>
          {/* FacebookMessengerLink */}

          <FacebookMessengerShareButton
            url="https://yourwebsite.com"
            quote="Check out this amazing content!"
            hashtag="#react"
          >
            <FacebookMessengerIcon size={30} round={true} />
          </FacebookMessengerShareButton>

          <span> </span>
          {/* Twitter(X)Link */}

          <TwitterShareButton
            url="https://yourwebsite.com"
            title="My awesome article"
          >
            <XIcon size={30} round={true} />
          </TwitterShareButton>

          <span> </span>

          {/* Whatsapp Link */}

          <WhatsappShareButton
            url="https://yourwebsite.com"
            title="My awesome article"
          >
            <WhatsappIcon size={30} round={true} />
          </WhatsappShareButton>

          <span> </span>

          {/* Telegram Link */}

          <TelegramShareButton
            url="https://yourwebsite.com"
            subject="Don't miss this!"
            body="This is a must-read!"
          >
            <TelegramIcon size={30} round={true} />
          </TelegramShareButton>

          <span> </span>
          {/* Linkedin Link */}

          <LinkedinShareButton
            url="https://yourwebsite.com"
            subject="Don't miss this!"
            body="This is a must-read!"
          >
            <LinkedinIcon size={30} round={true} />
          </LinkedinShareButton>

          <span> </span>
          {/* Email Link */}

          <EmailShareButton
            url="https://yourwebsite.com"
            subject="Don't miss this!"
            body="This is a must-read!"
          >
            <EmailIcon size={30} round={true} />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default Share;
