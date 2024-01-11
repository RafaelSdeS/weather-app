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

  return (
    <div
      className="border-2 border-gray-300 bg-white p-2 rounded-md w-1/2 mx-auto my-1 cursor-pointer"
      onClick={handleClick}
    >
      {isEditing ? (
        <input
          type="text"
          value={currentText}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border-2rounded-md p-2 w-full"
        />
      ) : (
        <span className="hover:underline  p-2 rounded-md">{text}</span>
      )}
    </div>
  )
}

export default Editable
