<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('sale_items', function (Blueprint $table) {
            $table->string('item_type')->default('product')->comment('product or charge');
            $table->unsignedBigInteger('charge_id')->nullable()->comment('Reference to charges table');
            $table->string('charge_type')->nullable()->comment('tax, service_charge, delivery_fee, discount, gratuity, custom');
            $table->decimal('rate_value', 10, 2)->nullable()->comment('Percentage or fixed amount value');
            $table->string('rate_type')->nullable()->comment('percentage or fixed');
            $table->decimal('base_amount', 12, 2)->nullable()->comment('Amount this charge is calculated on');
            $table->text('notes')->nullable();
            
            $table->foreign('charge_id')->references('id')->on('charges')->onDelete('set null');
            $table->index('item_type');
            $table->index('charge_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('sale_items', function (Blueprint $table) {
            $table->dropForeign(['charge_id']);
            $table->dropIndex(['item_type']);
            $table->dropIndex(['charge_type']);
            $table->dropColumn([
                'item_type',
                'charge_id',
                'charge_type',
                'rate_value',
                'rate_type',
                'base_amount',
                'notes'
            ]);
        });
    }
};
