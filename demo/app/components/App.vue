a<template>
    <Page ref="page" actionBarHidden="true">
        <ActionBar title="Test Page" />
        <TabView androidTabsPosition="bottom" ref="tabView">
            <TabViewItem title="Home">
                <Frame>
                    <Home />
                </Frame>
            </TabViewItem>
            <TabViewItem title="Second">
                <Frame>
                    <Page>
                        <ActionBar title="Second Page" />
                        <GridLayout>
                            <Label text="Default Page Content2" />
                        </GridLayout>
                    </Page>
                </Frame>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script lang="ts" src="./App.ts"/>
