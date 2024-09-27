import React from 'react';

interface TitleProps {
  title: string;
  dotColor: string;
  className: string;
  icon?: React.ElementType;
}

const Title: React.FC<TitleProps> = ({
  title,
  dotColor,
  className,
  icon: Icon,
}) => {
  const titleWordsArray = title.split(" ");

  return (
    <div className={className}>
      <span
        style={{
          backgroundColor: dotColor,
        }}
        className="dot"
      ></span>
      <h2 className="second-heading">
        {titleWordsArray.length > 2 ? (
          <div>
            <span>
              {titleWordsArray[0]} {titleWordsArray[1]}
            </span>
            <br />
            <span>{titleWordsArray.slice(2).join(" ")}</span>
          </div>
        ) : (
          <>{title}</>
        )}
      {Icon && <Icon width={40} height={40} />}
      </h2>
    </div>
  );
};

export default Title;
