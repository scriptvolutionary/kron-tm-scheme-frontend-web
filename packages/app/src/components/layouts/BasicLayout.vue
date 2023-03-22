<template>
    <Menubar class="py-0 px-2 m-2">
        <template #start>
            <div class="flex align-items-center gap-2">
                <Button icon="pi pi-bars" size="small" @click="handleSidebarMenuVisible = true" text />
                <p class="uppercase font-medium text-lg">Крон-тм</p>
            </div>
        </template>
        <template #end>
            <SplitButton label="admin" :model="userMenuList" icon="pi pi-user" text size="small" />
        </template>
    </Menubar>
    <Sidebar v-model:visible="handleSidebarMenuVisible">
        <!-- 
			НАПИСАТЬ САЙДБАР МЕНЮ
		 -->
    </Sidebar>
    <slot />
</template>

<script>
export default {
    data() {
        return {
            handleSidebarMenuVisible: false,
            handleUserMenuVisible: false,
            userMenuList: [{ label: 'Выход', icon: 'pi pi-fw pi-sign-out' }]
        }
    }
}
</script>
