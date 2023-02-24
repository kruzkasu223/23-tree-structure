import { TreeDataSetType } from "./data"

type LeafProps = {
  data: TreeDataSetType
  isLast?: boolean
}

export const Leaf = ({ data, isLast }: LeafProps) => {
  return data?.children?.length ? (
    <details className="leaf">
      <summary className="leaf_title" data-last={isLast}>
        {data.title}
      </summary>
      <div className="leaf">
        {data?.children?.map((child, i) => (
          <Leaf
            key={child.title}
            data={child}
            isLast={i + 1 === data?.children?.length}
          />
        ))}
      </div>
    </details>
  ) : (
    <div className="leaf">
      <div className="leaf_title no_child" data-last={isLast}>
        {data.title}
      </div>
    </div>
  )
}
