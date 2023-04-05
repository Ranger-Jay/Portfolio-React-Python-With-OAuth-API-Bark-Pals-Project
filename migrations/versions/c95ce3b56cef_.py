"""empty message

Revision ID: c95ce3b56cef
Revises: 135c1ed235e4
Create Date: 2023-04-03 23:39:32.247308

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c95ce3b56cef'
down_revision = '135c1ed235e4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('dogs', schema=None) as batch_op:
        batch_op.alter_column('weight',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=2),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('dogs', schema=None) as batch_op:
        batch_op.alter_column('weight',
               existing_type=sa.Float(precision=2),
               type_=sa.REAL(),
               existing_nullable=False)

    # ### end Alembic commands ###