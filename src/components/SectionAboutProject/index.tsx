import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({
  titleAbout,
  descriptionAbout,
  imageAbout
}: SectionAboutProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(imageAbout.url)}
          alt={imageAbout.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading>{titleAbout}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: descriptionAbout }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
