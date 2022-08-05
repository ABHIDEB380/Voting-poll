import "../style/Result.css"

export default function Result(props){
    console.log("props",props.result)
    props.setShowHead(true)
    return(
        <>{
        props.result === '' || props.result.length<3? 
        <h1>Please Vote 3 Item</h1>
        :
        <div className="result">
          <div className="rank1">
            <h1>Rank 1</h1>
            <div className="poll" key={props.result[0].id}>
              <div>
                <img src={props.result[0].image} alt="" />
              </div>
              <h3>
                {props.result[0].dishName}
              </h3>
              <div className="description">
                {props.result[0].description}
              </div>
            </div>
          </div>
          <div className="rank2">
            <h1>Rank 2</h1>
            <div className="poll" key={props.result[1].id}>
              <div>
                <img src={props.result[1].image} alt="" />
              </div>
              <h3>
                {props.result[1].dishName}
              </h3>
              <div className="description">
                {props.result[1].description}
              </div>
            </div>
          </div>
          <div className="rank3">
            <h1>Rank 3</h1>
            <div className="poll" key={props.result[2].id}>
              <div>
                <img src={props.result[2].image} alt="" />
              </div>
              <h3>
                {props.result[2].dishName}
              </h3>
              <div className="description">
                {props.result[2].description}
              </div>
            </div>
          </div>
        </div>
        }
        </>
    )
}