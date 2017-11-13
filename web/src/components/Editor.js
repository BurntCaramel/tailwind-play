import { h } from 'preact'
import makeOrganism from 'preact-organism'

const styles = {
  tagNameEditor: {
    display: 'block',
    width: '100%',
    resize: 'none'
  },
  textarea: {
    display: 'block',
    width: '100%',
    height: '50vh',
    resize: 'none'
  },
  previewOuter: {
    marginTop: '1rem'
  }
}

const View = ({ content, tagName, handlers: { changeContent, changeTagName } }) => {
  const Tag = tagName || 'span'
  return (
    <div>
      <textarea value={tagName} rows={ 1 } onInput={changeTagName} style={ styles.tagNameEditor } />
      <textarea value={content} rows={ 20 } onInput={changeContent} style={ styles.textarea } />
      <div style={ styles.previewOuter }>
        <Tag className={ content }>Hello</Tag>
      </div>
    </div>
  )
}

const handlers = {
  initial: () => ({
    tagName: 'button',
    content: `
text-white
bg-pink
p-3
rounded-lg
hover:bg-red
`.trim()
  }),

  changeContent: (props, { target: { value } }) => ({ content: value }),
  changeTagName: (props, { target: { value } }) => ({ tagName: value })
}

export default makeOrganism(View, handlers)
