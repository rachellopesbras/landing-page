import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { SectionPricingProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  benefits,
  buttonPricing,
  precoPorParcela,
  qtdParcelas,
  totalPrice
}: SectionPricingProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{qtdParcelas}x de</span> R${precoPorParcela}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button href={buttonPricing.url} onClick={onClick} withPrice>
      <p>{buttonPricing.label}</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R${qtdParcelas * precoPorParcela}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
