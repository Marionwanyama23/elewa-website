import { ImageAndText } from "@elewa-website/models/schema/ui/image-and-text";
import { ImageVisualisation } from "@elewa-website/models/schema/ui/images";

export const _highlightedImageData: ImageAndText[] =[
    {
        content: {
            title: "Our approach to content development",
            descriptions: [
                'The secret to succesfull education sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt.',
                'Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor'
            ],
        },
        image: {
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGX8-1zwxnyIuqhIAIjMjKeG89VmZ-1rD605F_tSIlw&s',
            title: 'Image',
            maxWidth: '500',
            visualisation: ImageVisualisation.Pill,
        },
        imagePosition: 'left'
    },
];

export function getLayoutClass(item: ImageAndText): string {
    if (item && item.imagePosition) {
        return item.imagePosition === 'left' ? 'left-image' : 'right-image';
      }
      // Return a default layout class if needed
      return 'default-layout';
}