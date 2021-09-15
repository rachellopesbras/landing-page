import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConceptsProps } from 'types/api'

const SectionLineConcepts = ({ title, concepts }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts &&
          concepts.map(({ title }) => <S.Item key={title}>{title}</S.Item>)}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionLineConcepts
