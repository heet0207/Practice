from django.shortcuts import render, redirect
from .models import Item
from django.shortcuts import get_object_or_404

def create_item(request):
    if request.method == 'POST':
        # Grab raw values directly from HTTP POST request
        name = request.POST.get('name')
        quantity = request.POST.get('quantity')
        description = request.POST.get('description')
        
        # Instantiate and save model data via ORM
        Item.objects.create(name=name, quantity=quantity, description=description)
        return redirect('item_list')
        
    return render(request, 'create.html')

def item_list(request):
    # Fetch all objects or slice data
    items = Item.objects.all()
    return render(request, 'list.html', {'items': items})

def update_item(request, pk):
    item = get_object_or_404(Item, pk=pk) # Fetch the item
    
    if request.method == 'POST':
        # Overwrite object attributes manually
        item.name = request.POST.get('name')
        item.quantity = request.POST.get('quantity')
        item.description = request.POST.get('description')
        item.save() # Push changes to DB
        return redirect('item_list')
        
    return render(request, 'update.html', {'item': item})

def delete_item(request, pk):
    item = get_object_or_404(Item, pk=pk)
    
    if request.method == 'POST':
        item.delete() # Trigger ORM deletion
        return redirect('item_list')
        
    return render(request, 'delete_confirm.html', {'item': item})