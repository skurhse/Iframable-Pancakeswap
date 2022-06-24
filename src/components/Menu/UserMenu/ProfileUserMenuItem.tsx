import styled from 'styled-components'
import { Flex, Skeleton, UserMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

import { useRouter } from 'next/router'

interface ProfileUserMenuItemProps {
  isLoading: boolean
  hasProfile: boolean
  disabled: boolean
}

const Dot = styled.div`
  background-color: ${({ theme }) => theme.colors.failure};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`

const ProfileUserMenuItem: React.FC<ProfileUserMenuItemProps> = ({ isLoading, hasProfile, disabled }) => {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNoProfileClick = () => {
    router.push('/create-profile')
  }

  if (isLoading) {
    return (
      <UserMenuItem>
        <Skeleton height="24px" width="35%" />
      </UserMenuItem>
    )
  }

  if (!hasProfile) {
    return (
      <UserMenuItem as="button" disabled={disabled} onClick={handleNoProfileClick}>
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          {t('Make a Profile')}
          <Dot />
        </Flex>
      </UserMenuItem>
    )
  }

  return (
    <UserMenuItem as="button" disabled={disabled}>
      {t('Your Profile')}
    </UserMenuItem>
  )
}

export default ProfileUserMenuItem
