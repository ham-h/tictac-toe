

const Prop = ({name,children}) => {
  return (
    // <div>{name}</div>
    <div>{name}
    <div>children willbe rendered below</div>
    <div>{children}</div>
    </div>
    
  )
}

export default Prop
//children is reserved