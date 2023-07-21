<script lang="ts" setup>
  import { defineComponent, ref, onMounted, watch, computed } from 'vue'
  import CodeOpen from '../../icons/code-open.vue'
  import CodeCopy from '../../icons/code-copy.vue'
  import CodeEdit from '../../icons/code-edit.vue'
  import CodeClose from '../../icons/code-close.vue'
  import { useNameSpace } from '../../hooks/use-namespaces'
  import { useCodeFold } from '../../hooks/use-codefold'
  import { useCodeCopy } from '../../hooks/use-codecopy'
  import { MessageNoticeService } from '../../messages/index'

  interface DemoBlockProps {
    code: string
    showCode: string
    title: string
    description: string
    editUrl: string
  }

  const props = withDefaults(defineProps<DemoBlockProps>(), {
    title: 'FS',
    description: 'Fire Starters'
  })

  const ns = useNameSpace()
  const { isCodeFold, setCodeFold } = useCodeFold()
  const { clickCopy } = useCodeCopy()

  const sourceCode = ref(decodeURIComponent(props.code))
  const showSourceCode = ref(decodeURIComponent(props.showCode))
  const sourceCodeArea = ref<any>(null)

  const editCodeUrl = ref(decodeURIComponent(props.editUrl))

  const clickCodeCopy = () => {
    clickCopy(sourceCode.value)
    MessageNoticeService.open()
  }

  const clickCodeEdit = () => {
    window.open(editCodeUrl.value,"_blank")
  }

  const sourceCodeContainerHeight = computed(() => {
    if (sourceCodeArea.value) return sourceCodeArea.value?.clientHeight
    return 0
  })
  const setContainerHeight = (value: number) => {
    if (isCodeFold.value) sourceCodeArea.value.style.height = '0px'
    else sourceCodeArea.value.style.height = `${value}px`
  }
  onMounted(() => {
    const currentContainerHeight = sourceCodeContainerHeight.value
    setContainerHeight(currentContainerHeight)
  })
  watch(isCodeFold, () => {
    const container = sourceCodeContainerHeight.value
    setContainerHeight(container)
  })
</script>

<template>
  <div :class="[ns.e('naive-ui__container')]">
    <section :class="[ns.bem('name_handle')]">
      <div v-if="props.title" :class="[ns.bem('component', 'name')]">{{ title }}</div>
      <div :class="[ns.bem('description', 'btns')]">
        <CodeEdit @click="clickCodeEdit" />
        <CodeCopy @click="clickCodeCopy" />
        <CodeClose v-if="!isCodeFold" @click="setCodeFold(true)" />
        <CodeOpen v-else @click="setCodeFold(false)" />
      </div>
    </section>

    <section v-if="props.description" :class="[ns.bem('description')]">
      <span>
        {{ description }}
      </span>
    </section>

    <section :class="[ns.bem('preview')]">
      <slot> </slot>
    </section>

    <section :class="[ns.bem('source')]" ref="sourceCodeArea">
      <div v-html="showSourceCode" class="language-vue"></div>
    </section>
  </div>
</template>

<style src="./naive-ui.scss"></style>
