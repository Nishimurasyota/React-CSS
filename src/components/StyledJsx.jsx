export const StyledJsx = () => {
  return (
    <>
      <div className="divStyle">
        <p>- Styled CSS -</p>
        <button>FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .divStyle {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: antiquewhite;
        }
      `}</style>
    </>
  );
};
