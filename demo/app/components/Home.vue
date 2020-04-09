<template>
    <Page ref="page">
        <ActionBar title="Home Page" />
        <AbsoluteLayout>
            <DockLayout width="100%" height="100%">
                <MDButton dock="top" text="test" @tap="onTap('button under test', $event)"/>
                <MDButton dock="left" text="test1" @tap="onTap('button under test1', $event)"/>
                <MDButton dock="bottom" text="test2" @tap="onTap('button under test2', $event)"/>
                <MDButton class="btn" dock="right" text="test3" @tap="onTap('button under test3', $event)"/>
            </DockLayout>
            <Fab position="left" title="de" backgroundColor="yellow" iconClass="mdi" icon="mdi-plus" iconOn="mdi-share-variant" @tap="onTap('main', $event)">
                <FabItem title="test7" iconClass="mdi" icon="f" backgroundColor="red"  @tap="onTap('test7', $event)"/>
                <FabItem title="test6" iconClass="mdi" icon="e" backgroundColor="red"  @tap="onTap('test6', $event)"/>
                <FabItem title="test5" iconClass="mdi" icon="d" @tap="onTap('test5', $event)"/>
                <FabItem title="test4" iconClass="mdi" icon="c" @tap="onTap('test4', $event)"/>
                <FabItem title="test3" iconClass="mdi" icon="b" @tap="onTap('test3', $event)"/>
                <FabItem title="test2" iconClass="mdi" icon="ba" @tap="onTap('test2', $event)"/>
                <FabItem title="test" iconClass="mdi" icon="a" color="blue"  @tap="onTap('test', $event)"/>
            </Fab>
             <Fab position="right" backgroundColor="red" title="test button" iconClass="mdi" icon="a" iconOn="b" @tap="onTap('main', $event)">
                <FabItem title="test7" iconClass="mdi" icon="f" backgroundColor="red"  @tap="onTap('test7', $event)"/>
                <FabItem title="test6" iconClass="mdi" icon="e" backgroundColor="red"  @tap="onTap('test6', $event)"/>
                <FabItem title="test5" iconClass="mdi" icon="d" @tap="onTap('test5', $event)"/>
                <FabItem title="test4" iconClass="mdi" icon="c" @tap="onTap('test4', $event)"/>
                <FabItem title="test3" iconClass="mdi" icon="b" @tap="onTap('test3', $event)"/>
                <FabItem title="test2" iconClass="mdi" icon="ba" @tap="onTap('test2', $event)"/>
                <FabItem title="test" iconClass="mdi" icon="a" color="blue"  @tap="onTap('test', $event)"/>
            </Fab>
        </AbsoluteLayout>

    </Page>
</template>  
<style scoped>
    .btn {
        background-color: brown;
    }

    .btn[active=true] {
        background-color: yellow;
    }

</style>
<script lang="ts" src="./Home.ts"/>
