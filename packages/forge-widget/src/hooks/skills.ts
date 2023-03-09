import { SkillId, SkillMetadata, useMetadataMapReadAtom } from '@past3lle/forge-web3'
import { useCallback } from 'react'

import { useSkillsAtom } from '../state/Skills'

export function useGetSkillFromIdCallback() {
  const [metadataMap] = useMetadataMapReadAtom()

  return useCallback((id: SkillId) => metadataMap[id], [metadataMap])
}

export function useGetActiveSkill(): null | [SkillMetadata, ReturnType<typeof useSkillsAtom>[1]] {
  const getActiveSkill = useGetSkillFromIdCallback()
  const [skillState, setSkillState] = useSkillsAtom()
  const {
    active: [currentlyActive]
  } = skillState

  if (!currentlyActive) return null

  const activeSkill = getActiveSkill(currentlyActive)
  return [activeSkill, setSkillState]
}
