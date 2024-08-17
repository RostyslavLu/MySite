<script setup>
import { useI18n } from 'vue-i18n'
import ExperienceListItem from './ExperienceListItem.vue'
import TaskDescriptionItem from './TaskDescriptionItem.vue'
const { t } = useI18n()

</script>

<template>
  <div class="experience-container">
    <ExperienceListItem
      :titleExperienceItem = "t('resume.experienceItems[0].title')"
      :company = "t('resume.experienceItems[0].company')"
      :date = "t('resume.experienceItems[0].date')"
    >
      <TaskDescriptionItem
        :taskDescriptionItem = "t('resume.experienceItems[0].taskDescription[0]')"
      />
      <TaskDescriptionItem
        :taskDescriptionItem = "t('resume.experienceItems[0].taskDescription[1]')"
      />
      <TaskDescriptionItem
        :taskDescriptionItem = "t('resume.experienceItems[0].taskDescription[2]')"
      />
      <TaskDescriptionItem
        :taskDescriptionItem = "t('resume.experienceItems[0].taskDescription[3]')"
      />
      <TaskDescriptionItem
        :taskDescriptionItem = "t('resume.experienceItems[0].taskDescription[4]')"
      />
    </ExperienceListItem>
    <ExperienceListItem
      :titleExperienceItem = "t('resume.experienceItems[1].title')"
      :company = "t('resume.experienceItems[1].company')"
      :date = "t('resume.experienceItems[1].date')"
    >
      <TaskDescriptionItem
        :taskDescriptionItem = "t('resume.experienceItems[1].taskDescription[0]')"
      />
      <TaskDescriptionItem
        :taskDescriptionItem = "t('resume.experienceItems[1].taskDescription[1]')"
      />
      <TaskDescriptionItem
        :taskDescriptionItem = "t('resume.experienceItems[1].taskDescription[2]')"
      />
      <TaskDescriptionItem
        :taskDescriptionItem = "t('resume.experienceItems[1].taskDescription[3]')"
      />
    </ExperienceListItem>
  </div>
</template>
