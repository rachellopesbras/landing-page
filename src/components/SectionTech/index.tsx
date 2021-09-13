import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTechnology = ({ titleTech, iconTech }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{titleTech}</Heading>
      <S.IconsContainer>
        {iconTech.map(({ titleIcon, icon }) => (
          <S.Icon key={titleIcon}>
            <S.Icons
              src={getImageUrl(icon.url)}
              alt={titleIcon}
              loading="lazy"
            />
            <S.IconsName>{titleIcon}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTechnology
