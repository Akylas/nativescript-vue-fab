<template>
    <GridLayout class="fab" left="0" top="0" height="100%" width="100%" rows="auto,*,auto,auto" columns="auto,*,auto" isPassThroughParentEnabled="true">
        <AbsoluteLayout colSpan="3" rowSpan="4" class="fab-backdrop" @tap="onBackdropTap" :isUserInteractionEnabled="active" />
        <FlexboxLayout class="fab-items-holder" :flexDirection="orientation === 'vertical' ? 'column-reverse' : 'row-reverse'" :horizontalAlignment="rPosition" row="2" colSpan="3" isPassThroughParentEnabled="true">
            <slot />
        </FlexboxLayout>
        <GridLayout :columns="fabColumns" width="100%" :horizontalAlignment="rPosition" row="3" colSpan="3" isPassThroughParentEnabled="true">
            <Label col="1" class="fab-title" :text="title" :class="buttonClass" v-if="title" :isUserInteractionEnabled="active" @tap="onButtonTap" />
            <GridLayout class="fab-button" :col="fabButtonCol" @tap="onButtonTap" :rippleColor="rippleColor" :backgroundColor="backgroundColor">
                <Label class="fab-icon-off" :class="iconClass" :color="color" :text="icon" isUserInteractionEnabled="false" />
                <Label class="fab-icon-on" :class="iconClass" :color="color" :text="iconOn || icon" isUserInteractionEnabled="false" />
            </GridLayout>
        </GridLayout>
    </GridLayout>
</template>
<script lang="ts" src="./Fab.ts" />
