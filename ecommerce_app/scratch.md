# Model
image = models.ImageField(upload_to='product_images/', null=True, blank=True)

# serializer  'image',
def create(self, validated_data):
        image = validated_data.get('image')
        if image:
            image_file = ContentFile(image.read())
            validated_data['image'] = InMemoryUploadedFile(
                image_file,
                None,
                image.name,
                image.content_type,
                image.size,
                image.charset
            )
        return super().create(validated_data)

# View