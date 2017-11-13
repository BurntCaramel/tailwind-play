import { h } from 'preact'
import makeOrganism from 'preact-organism'

const styles = {
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

const View = ({ content, handlers: { changeContent } }) => (
  <div>
    <textarea value={content} rows={ 20 } onInput={changeContent} style={ styles.textarea } />
    <div style={ styles.previewOuter }>
      <div className={ content }>Hello</div>
    </div>
  </div>
)

const handlers = {
  initial: () => ({
    content: `
text-white
bg-pink
p-3
rounded-lg
hover:bg-red
`.trim()
  }),

  changeContent: (props, { target: { value } }) => ({ content: value })
}

export default makeOrganism(View, handlers)
