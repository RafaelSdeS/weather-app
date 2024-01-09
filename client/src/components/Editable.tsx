import { SetStateAction, useState } from 'react'

interface EditableProps {
  text: string
  onChange: (newText: string) => void
}

const Editable: React.FC<EditableProps> = ({ text, onChange }) => {
  const [isEditing, setEditing] = useState(false)
  const [currentText, setCurrentText] = useState(text)

  const handleClick = () => {
    setEditing(true)
  }

  const handleBlur = () => {
    setEditing(false)
    onChange(currentText)
  }

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCurrentText(e.target.value)
  }

  return isEditing ? (
    <input
      type="text"
      value={currentText}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  ) : (
    <span onClick={handleClick}>{text}</span>
  )
}

export default Editable
