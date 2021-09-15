import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import * as S from './styles'
import { SectioNModulsProps } from 'types/api'

const SectionModules = ({ title, module }: SectioNModulsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {module &&
        module.map(({ title, subTitle, description }, index) => (
          <CardModule key={index} title={title} subTitle={subTitle}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </CardModule>
        ))}
    </S.Content>
  </Container>
)

export default SectionModules
