<template>
    <Page ref="page">
        <ActionBar title="Home Page" />
        <AbsoluteLayout>
            <StackLayout>
                <Label text="this is the home page" />
            </StackLayout>
            <Fab title="test" iconClass="mdi" :icon="'mdi-plus' | fonticon" :iconOn="'mdi-share-variant' | fonticon" @tap="onTap('main', $event)">
                <FabItem title="test6" iconClass="mdi" icon="e" color="red"  @tap="onTap('test6', $event)"/>
                <FabItem title="test5" iconClass="mdi" icon="d" color="red"  @tap="onTap('test5', $event)"/>
                <FabItem title="test4" iconClass="mdi" icon="c" color="red"  @tap="onTap('test4', $event)"/>
                <FabItem title="test3" iconClass="mdi" icon="b" color="red"  @tap="onTap('test3', $event)"/>
                <FabItem title="test" iconClass="mdi" icon="a" color="blue"  @tap="onTap('test', $event)"/>
            </Fab>
        </AbsoluteLayout>

    </Page>
</template>

<script lang="ts" src="./Home.ts"/>
