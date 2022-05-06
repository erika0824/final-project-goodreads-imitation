import ACOMAF from './images/ACOMAF.jpg';
import ACOSF from './images/ACOSF.jpg';
import ACOTAR from './images/ACOTAR.jpg';
import ACOWAR from './images/ACOWAR.jpg';
import IYT from './images/IYT.jpg';
import RT from './images/RT.jpg';
import TAORITR from './images/TAORITR.jpg';
import THITCS from './images/THITCS.jpg';
import Verity from './images/Verity.jpg';
import WTCS from './images/WTCS.jpg';


export const BOOKS = [
    {
        id: '9d250db8-fb34-4b06-8b60-5a65327a228a',
        cover: THITCS,
        title: 'The House in the Cerulean Sea',
        author: 'TJ Klune',
        hasRead: true,
        shelves: 'Read',
    },
    {
        id: 'cdfdfa23-cfd3-4088-afd6-9f2c07369741',
        cover: ACOTAR,
        title: 'A Court of Thorns and Roses',
        author: 'Sarah J. Maas',
        hasRead: true,
        shelves: 'Read',
    },
    {
        id: 'e14cddea-fb8b-4684-902c-317f8b55dcc1',
        cover: ACOMAF,
        title: 'A Court of Fury and Mist and Fury',
        author: 'Sarah J. Maas',
        hasRead: true,
        shelves: 'Read',
    },
    {
        id: '8b3d4033-3f44-42db-8448-8fd97e78edfe',
        cover: ACOWAR,
        title: 'A Court of Wings and Ruin',
        author: 'Sarah J. Maas',
        hasRead: false,
        shelves: 'Want to Read',
    },
    {
        id: '4799f7f4-9423-4861-90ee-e6eeff2a8f3a',
        cover: ACOSF,
        title: 'A Court of Silver Flames',
        author: 'Sarah J. Maas',
        hasRead: false,
        shelves: 'Want to Read',
    },
    {
        id: '569382dc-77bb-49ba-b67d-3ff1d2f2fafa',
        cover: WTCS,
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        hasRead: true,
        shelves: 'Read',
    },
    {
        id: '3b0bb6ae-7c18-4a31-86e5-fc7a330de3d8',
        cover: TAORITR,
        title: 'The Art of Racing in the Rain',
        author: 'Garth Stein',
        hasRead: true,
        shelves: 'Read',
    },
    {
        id: 'a51e3da9-8bed-49ce-abe1-eea5cfb38aa0',
        cover: IYT,
        title: 'If You Tell',
        author: 'Gregg Olson',
        hasRead: true,
        shelves: 'Read',
    },
    {
        id: '869eb3f9-a92a-4a77-93fb-d17051a5c327',
        cover: Verity,
        title: 'Verity',
        author: 'Colleen Hoover',
        hasRead: true,
        shelves: 'Read',
    },
    {
        id: 'a25e30b5-bb78-42e1-84c0-192fd4e9f1e5',
        cover: RT,
        title: 'Razorblade Tears',
        author: 'Sarah J. Maas',
        hasRead: true,
        shelves: 'Read',
    },
    {
        id: 11,
        cover: null,
        title: 'The  Golden Couple',
        author: 'Sarah Pekkanen',
        hasRead: true,
        shelves: 'Read',
    },

]

export const SHELVES = [
    {
        id: 'e30fd794-21cb-4a03-a0da-03247e884674',
        name: 'Want to Read'
    },
    {
        id: '9070a15c-6515-4271-98d4-e3f0e4886cc6',
        name: 'Read'
    },
]