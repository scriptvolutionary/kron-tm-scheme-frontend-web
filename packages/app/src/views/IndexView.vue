<template>
    <main class="m-2 grid gap-2">
        <div class="col-2 p-0">
            <Menu class="w-full" :model="facilityMenuList">
                <template #start>
                    <p class="font-medium text-sm p-0 pl-3">Сущности</p>
                    <Badge label="new" />
                </template>
            </Menu>
        </div>
        <div class="col p-0">
            <Menubar class="p-0" :model="tabMenuList">
                <template #end>
                    <span class="p-buttonset">
                        <Button label="Редактор" size="small" severity="secondary" />
                        <Button label="Действие" size="small" severity="secondary" />
                        <Button label="Действие" size="small" severity="secondary" />
                    </span>
                </template>
            </Menubar>
        </div>
    </main>
</template>

<script>
export default {
    name: 'IndexView',
    data() {
        return {
            facilityMenuList: [
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' },
                { label: 'ГЗУ', icon: 'pi pi-info' }
            ],
            tabMenuList: [{ label: 'Сущность' }, { label: 'События' }]
        }
    }
}
</script>
