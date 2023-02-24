import { TREE_DATASET } from "./data"
import { Leaf } from "./Leaf"

const App = () => {
  return (
    <div className="App">
      <h1>23/27 - Tree Structure</h1>
      <p>(click on "India" to begin)</p>
      <div>
        <div className="tree">
          {TREE_DATASET?.map((data, i) => (
            <Leaf
              key={data.title}
              data={data}
              isLast={i + 1 === data?.children?.length}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
