<template>
    <GridLayout :horizontalAlignment="position" :columns="isRight ? '*,auto,auto' : 'auto,auto,*'" width="100%" isPassThroughParentEnabled="true" padding="0">
        <MDCardView col="1" ref="titleLabel" class="fab-item-title-holder" :class="computedTitleClass" :visibility="title?'visible':'collapsed'" :isUserInteractionEnabled="visible" @tap="onButtonTap">
            <StackLayout orientation="horizontal" height="100%">
                <Label class="fab-item-title" :text="title" />
            </StackLayout>
        </MDCardView>
        <MDButton :col="isRight ? 2 : 0" ref="button" class="fab-item" :class="computedButttonClass" :color="color" :backgroundColor="backgroundColor" :text="icon" @tap="onButtonTap" :isUserInteractionEnabled="visible" />
    </GridLayout>
</template>

<script lang="ts" src="./FabItem.ts"/>
<style lang="scss" scoped>
@import "./style/style";
</style>