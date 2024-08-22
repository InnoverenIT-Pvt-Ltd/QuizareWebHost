import React from "react";
import Avatar from "antd/lib/avatar";
import { base_url } from "../../../../Config/Auth";
import { ProgressiveImage } from "../../../../Components/Utils";
const Image = ({
  imageId,
  imageURL,
  primaryTitle,
  imgWidth,
  imgHeight,
  smallAvatar,
  imgRadius,
  // bgcolor,
  minAvatarWidth,
}) => {
  const size = smallAvatar && !imageId && !imageURL ? "small" : "large";
  // const fontSize = size === "large" ? 18 : 12;
  const color = size === "large" ? "#fff" : "#fff";
  // const backgroundColor = size === "large" ? "#337df4" : "#337df4";
  const backgroundColor = size === "large" ? "#337df4" : "#337df4";
  const borderWidth = size === "large" ? "0.0625em" : "0.0625em";
  const borderColor = size === "large" ? "#337df4" : "#337df4";
  const borderStyle = size === "large" ? "solid" : "solid";
  return (
    <>
      {imageId || imageURL ? (
        imageId ? (
          <div style={{  }}>
            <ProgressiveImage
            class="w-36 h-28"          
              image={`${base_url}/image/${imageId}`}            
              height={imgHeight || "36.4rem"}
            />
          </div>
        ) : (
            <ProgressiveImage
            class="w-36 h-28"           
              image={imageURL}           
              height={imgHeight || "36.4rem"}           
            />
          )
      ) : (
          <Avatar
            size={size || "large"}
            style={{
              color,
              // backgroundColor: bgcolor ? "red" : backgroundColor,
              backgroundColor,
              // fontSize,
              borderWidth,
              borderColor,
              borderStyle,
              minWidth: minAvatarWidth,
            }}
          >
            {primaryTitle && primaryTitle.split("")[0].toUpperCase()}
          </Avatar>
        )}
    </>
  );
};

export default Image;