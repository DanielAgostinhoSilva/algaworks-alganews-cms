import styled from "styled-components";
import Input from "../components/Input/Input";
import ImageUpload from "../components/ImageUpload";
import MarkdownEditor from "../components/MardownEditor";
import TagInput from "../components/TagInput";
import React, {useState} from "react";
import {Tag} from "react-tag-input";
import WordPriceCounter from "../components/WordPriceCounter";
import Button from "../components/Button/Button";
import countWordsInMarkdown from "../../core/utils/countWorldsInMarkdown";
import info from "../../core/utils/info";

export default function PostForm() {
    const [tags, setTags] = useState<Tag[]>([])
    const [body, setBody] = useState('')


    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        info({
            title: 'Post salvo com sucesso',
            description: 'Você acabou de salvar o post'
        })
    }

    return <PostFormWrapper onSubmit={handleFormSubmit}>
        <Input
            label={'título'}
            placeholder={'e.g.: Como fiquei rico aprendendo React'}
        />
        <ImageUpload label={'Thumbnail do Post'} />
        <MarkdownEditor onChange={setBody}/>
        <TagInput
            placeholder={'Insira as tags deste post'}
            tags={tags}
            onAdd={tag => setTags([...tags, tag])}
            onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
        />
        <PostFormSubmitWrapper>
            <WordPriceCounter wordsCount={countWordsInMarkdown(body)} pricePerWord={0.25} />
            <Button variant={'primary'} label={'Salvar post'} type={'submit'}/>
        </PostFormSubmitWrapper>
    </PostFormWrapper>
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`