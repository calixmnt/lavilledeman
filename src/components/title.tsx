const Title = ({ title, dotColor }: { title: string; dotColor: string }) => {
  const titleWordsArray = title.split(" ");

  return (
    <div className="container title-container">
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
      </h2>
    </div>
  );
};

export default Title;
