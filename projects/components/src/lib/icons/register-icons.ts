import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const svgIcons = {
    titan: '/assets/icons/titan.svg',
    hunter: '/assets/icons/hunter.svg',
    warlock: '/assets/icons/warlock.svg',
};

export const registerIcons = (registry: MatIconRegistry, domSanitizer: DomSanitizer) => {
    Object.keys(svgIcons).map(name => {
        const path = svgIcons[name];
        registry.addSvgIcon(name, domSanitizer.bypassSecurityTrustResourceUrl(path));
    });
};
