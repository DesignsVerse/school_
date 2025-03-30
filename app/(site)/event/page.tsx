import SectionHeader from '@/components/Common/SectionHeader'
import Event from '@/components/Event/Event'
import React from 'react'

const Faculty = () => {
  return (
    <>
  <SectionHeader title="Event" breadcrumbPath="Event" />
    <div>
      <Event/>
    </div>
    </>
  )
}

export default Faculty
