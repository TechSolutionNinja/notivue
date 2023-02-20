import { ref, shallowRef } from 'vue'
import { createPush as _createPush } from './createPush'
import type { IncomingOptions, StoreItem, Store } from './types'

export function createStore(): Store {
   const items = ref<StoreItem[]>([])
   const incoming = shallowRef<IncomingOptions>({} as IncomingOptions)
   const clearTrigger = ref(false)

   function setIncoming(options: IncomingOptions) {
      incoming.value = options
   }

   function createItem(item: StoreItem) {
      items.value.push(item)
   }

   function getItem(id: string) {
      return items.value.find(({ id: _id }) => _id === id)
   }

   function updateItem(id: string, options: Partial<StoreItem>) {
      const item = getItem(id)
      // isReactive(item) -> true

      if (item) {
         Object.assign(item, options)
      }
   }

   function removeItem(id: string) {
      items.value = items.value.filter(({ id: _id }) => _id !== id)
   }

   function animateItem(id: string, className: string, onEnd: () => void) {
      updateItem(id, {
         animClass: className,
         onAnimationstart: (event: AnimationEvent) => event.stopPropagation(),
         onAnimationend: (event: AnimationEvent) => {
            event.stopPropagation()
            onEnd()
         },
      })
   }

   function clearItem(id: string) {
      const item = getItem(id)

      if (item) {
         item.clear()
      }
   }

   function updateAll(updateItem: (prevItem: StoreItem) => StoreItem) {
      items.value = items.value.map((prevItem) => updateItem(prevItem))
   }

   function destroyAll() {
      items.value = []
   }

   function setClearTrigger() {
      clearTrigger.value = true
   }

   function resetClearTrigger() {
      clearTrigger.value = false
   }

   function createPush() {
      return _createPush({ setIncoming, clearItem, setClearTrigger, destroyAll })
   }

   return {
      items,
      incoming,
      clearTrigger,
      createItem,
      getItem,
      animateItem,
      updateItem,
      removeItem,
      updateAll,
      destroyAll,
      resetClearTrigger,
      createPush,
   }
}
