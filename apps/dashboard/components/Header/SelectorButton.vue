<template>
    <button w-auto h='30px' px-2 flex items-center justify-center border border-transparent rounded-lg gap="8px"
        text-faded hover:text-foreground hover:border-border hover:shadow-sm hover:bg-semifaded transition-all>
        <span text-foreground>
            <slot />
        </span>
        <div i-tabler-selector />
    </button>
</template>