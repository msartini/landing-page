import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({alternativeText, url}: LogoProps) => (
  /* se fosse usar imagens local na pasta /public ,
  usaria assim :: getImageUrl(url), onde url é o caminho da imagem */
<S.LogoWrapper src={url} alt={alternativeText} />
)

export default Logo
