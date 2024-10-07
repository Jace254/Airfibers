<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <div class="max-h-[30px] max-w-[30px] flex items-center justify-center overflow-hidden border border-border rounded-full bg-clip-border outline-border outline">
        <img class="h-[29px] w-[29px] rounded-full" src="https://static.cinemagia.ro/img/resize/db/actor/85/43/25/ariana-greenblatt-334829l-600x0-w-43da3a7c.jpg">
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="z-100 w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <div class="i-material-symbols-account-circle mr-2 h-4 w-4 text-semifaded" />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div class="i-healthicons-ui-preferences mr-2 h-4 w-4 text-semifaded" />
          <span>Preferences</span>
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <div class="i-material-symbols-logout-rounded mr-2 h-4 w-4 text-semifaded" />
        <span>Log out</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
