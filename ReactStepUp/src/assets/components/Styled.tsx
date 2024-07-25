function StyledTsx() {
  return (
    <><div className="container">
        <p className="title">- -</p>
        <button>Fight!!</button>
        <style jsx="true">{`
          .container {
            border: solid 2px #392eff;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .title {
            margin: 0;
            color: #3d84a8;
          }
        `}</style>
      </div>
    </>
  )
}

export default StyledTsx