import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import Head from './head'
import Header from './header'

const Readme = ({ user, repo }) => {
  // const { userName, repositoryName } = useParams()
  const [text, setText] = useState('')
  const url = `https://raw.githubusercontent.com/${user}/${repo}/master/README.md`
  useEffect(() => {
    fetch(url)
      .then((r) => r.text())
      .then((str) => {
        setText(str)
      })
      .catch((err) => console.log(err))
  }, [url])
  return (
    <>
      <Head title="Readme" />
      <Header {...{ user, repo }} />
      <div id="description" className="m-2">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)
