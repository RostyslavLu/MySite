<script setup>
import { useI18n } from 'vue-i18n'
import EducationListItem from './EducationListItem.vue'

const { t } = useI18n()
</script>

<template>
  <div class="education-container">
    <EducationListItem
      :titleEducationItem = "t('resume.educationItems[0].title')"
      :school = "t('resume.educationItems[0].school')"
      :date = "t('resume.educationItems[0].date')"
    />
    <EducationListItem
      :titleEducationItem = "t('resume.educationItems[1].title')"
      :school = "t('resume.educationItems[1].school')"
      :date = "t('resume.educationItems[1].date')"
    />
    <EducationListItem
      :titleEducationItem = "t('resume.educationItems[2].title')"
      :school = "t('resume.educationItems[2].school')"
      :date = "t('resume.educationItems[2].date')"
    />
  </div>
</template>
