export const VerticalSpace = ({ vSpace }: { vSpace: number }) => {
  const brTag = []
  for (let count = 0; count <= vSpace; count++) {
    brTag.push(<br key={count} />)
  }
  brTag.join('')

  return <>{brTag}</>
}
