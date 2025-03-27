import SectionHeader from '@/components/Common/SectionHeader'
import TeamPage from '@/components/Faculty/team'
import React from 'react'

const Faculty = () => {
  return (
    <>
  <SectionHeader title="Faculty and Staff" breadcrumbPath="Faculty and staff" />
    <div>
      <TeamPage/>
    </div>
    </>
  )
}

export default Faculty
