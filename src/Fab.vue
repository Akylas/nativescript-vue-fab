<template>
    <GridLayout left="0" top="0" height="100%" width="100%" rows="auto,*,auto,auto" columns="auto,*,auto" isPassThroughParentEnabled="true">
        <AbsoluteLayout colSpan="3" rowSpan="4" class="fab-backdrop" :class="classBackdrop" @tap="onBackdropTap" :isUserInteractionEnabled="active" :debug="debug" :visibility="realActive?'visible':'collapsed'" />
        <StackLayout class="fab-items-holder" :horizontalAlignment="position" row="2" colSpan="3" isPassThroughParentEnabled="true" :visibility="realActive?'visible':'collapsed'"  :debug="debug">
            <slot />
        </StackLayout>

        <GridLayout :columns="isRight ? '*,auto,auto' : 'auto,auto,*'" width="100%" :horizontalAlignment="position" row="3" colSpan="3" isPassThroughParentEnabled="true">
            <StackLayout orientation="horizontal" height="100%" col="1" ref="titleLabel" class='fab-title-holder' :class="computedTitleClass" :visibility="title?'visible':'collapsed'" :isUserInteractionEnabled="active" @tap="onButtonTap" :debug="debug">
                <Label class="fab-item-title" :text="title" />
            </StackLayout>
            <GridLayout class="fab-button" :col="isRight? 2 : 0" @tap="onButtonTap" :color="color" :rippleColor="actualRippleColor" :backgroundColor="actualBackgroundColor" :debug="debug">
                <!-- <MDButton class="fab-button" @tap="onButtonTap" :color="color" :rippleColor="rippleColor" :backgroundColor="backgroundColor" :debug="debug" /> -->
                <label class="fab-icon fab-icon-off" :class="iconOffClass" :color="color" :text="icon" isUserInteractionEnabled="false" style="z-index:20;" />
                <Label class="fab-icon fab-icon-on" :class="iconOnClass" :color="color" :text="iconOn || icon" isUserInteractionEnabled="false" style="z-index:20;" />
            </GridLayout>
        </GridLayout>

    </GridLayout>
</template>
<script src="./Fab.ts"/>
    