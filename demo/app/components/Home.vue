<template>
    <Page ref="page">
        <ActionBar title="Home Page" />
        <AbsoluteLayout>
            <DockLayout width="100%" height="100%">
                <Button dock="top" text="test" @tap="onTap('button under test', $event)"/>
                <Button dock="left" text="test1" @tap="onTap('button under test1', $event)"/>
                <Button dock="bottom" text="test2" @tap="onTap('button under test2', $event)"/>
                <Button dock="right" text="test3" @tap="onTap('button under test3', $event)"/>
            </DockLayout>
            <Fab position="left" title="de" iconClass="mdi" :icon="'mdi-plus' | fonticon" :iconOn="'mdi-share-variant' | fonticon" @tap="onTap('main', $event)">
                <FabItem title="test6" iconClass="mdi" icon="e" backgroundColor="red"  @tap="onTap('test6', $event)"/>
                <FabItem title="test5" iconClass="mdi" icon="d" @tap="onTap('test5', $event)"/>
                <FabItem title="test4" iconClass="mdi" icon="c" @tap="onTap('test4', $event)"/>
                <FabItem title="test3" iconClass="mdi" icon="b" @tap="onTap('test3', $event)"/>
                <FabItem title="test" iconClass="mdi" icon="a" color="blue"  @tap="onTap('test', $event)"/>
            </Fab>
             <Fab position="right" title="de" iconClass="mdi" :icon="'mdi-plus' | fonticon" :iconOn="'mdi-share-variant' | fonticon" @tap="onTap('main', $event)">
                <FabItem title="test6" iconClass="mdi" icon="e" backgroundColor="red"  @tap="onTap('test6', $event)"/>
                <FabItem title="test5" iconClass="mdi" icon="d" @tap="onTap('test5', $event)"/>
                <FabItem title="test4" iconClass="mdi" icon="c" @tap="onTap('test4', $event)"/>
                <FabItem title="test3" iconClass="mdi" icon="b" @tap="onTap('test3', $event)"/>
                <FabItem title="test" iconClass="mdi" icon="a" color="blue"  @tap="onTap('test', $event)"/>
            </Fab>
        </AbsoluteLayout>

    </Page>
</template>  

<script lang="ts" src="./Home.ts"/>
