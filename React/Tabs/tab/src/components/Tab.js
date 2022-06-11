
import React, {useState} from 'react'

export const Tab = (props) => {
  const [content, setContent] = useState(props.tabs[1].content);

  const submit = (event, tab) => {
    setContent(tab.content);
  
  };
  return (
    <>
    <ul>
    {props.tabs.map((item,index)=>{
        return <li key={index}> <button onClick={(e)=> submit(e,item)} type="button">{item.name}</button></li>

        
    })}
    </ul>
    <div >
            {content}
          </div>
    </>
  )
}
