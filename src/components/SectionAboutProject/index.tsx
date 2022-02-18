import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ReactMarkdown from "react-markdown";

import { SectionAboutProjectProps } from 'types/api'

import * as S from './styles'



const SectionAboutProject = ({title, description, image}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
      <S.Image
          src={image.data.attributes.url}
          alt={image.data.attributes.alternativeText}
        />

        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{__html: description}} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
