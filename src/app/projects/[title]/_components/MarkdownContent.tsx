'use client'
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function MarkdownContent({content}: {content: string}) {
  return (
    <MarkdownPreview source={content} wrapperElement={{'data-color-mode': "light" }} />
  )
}
